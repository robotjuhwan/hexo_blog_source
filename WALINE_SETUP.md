# Waline Comment Setup

This repository contains the static-site side of the comment feature. It stays
off by default, so incomplete configuration never leaves a broken comment box
on `poul.kr`. When enabled, it appears on blog posts only, not the about,
privacy, or contact pages.

## Behavior Chosen For PouL

- No commenter login.
- Nickname is the only required commenter field.
- Comments are published immediately; the administrator removes spam later.
- Cloudflare Turnstile runs before a comment can be submitted.
- One IP address can submit one comment every 30 seconds.
- Image uploads, emoji search, and client-side code/TeX preview are disabled to
  keep the public surface small.

## 1. Deploy The Waline Server

Deploy the official Waline server on Vercel and attach a persistent database.
Waline's current guide uses Vercel plus Neon PostgreSQL. Give the service a
separate subdomain such as `comments.poul.kr`, then add that address to Vercel.

Set these Vercel environment variables. Values marked secret belong only in
Vercel, never in this repository or the GitHub Pages repository.

```text
SITE_NAME=PouL comments
SITE_URL=https://poul.kr
SERVER_URL=https://comments.poul.kr
JWT_TOKEN=<generate-a-long-random-secret>
POSTGRES_DATABASE=<provided-by-neon>
POSTGRES_USER=<provided-by-neon>
POSTGRES_PASSWORD=<provided-by-neon-secret>
POSTGRES_HOST=<provided-by-neon>
POSTGRES_SSL=true
SECURE_DOMAINS=poul.kr,comments.poul.kr
IPQPS=30
COMMENT_AUDIT=false
DISABLE_REGION=true
DISABLE_USERAGENT=true
TURNSTILE_KEY=<cloudflare-turnstile-site-key>
TURNSTILE_SECRET=<cloudflare-turnstile-secret>
```

`IPQPS=30` is the requested cooldown: after a comment from one IP, Waline
rejects another one from that IP for 30 seconds. It is not a daily quota.

After the first deploy, register the administrator at
`https://comments.poul.kr/ui/register`. The first registered account becomes
the Waline administrator and can delete spam from `/ui`.

## 2. Create Turnstile Keys

Create a Cloudflare Turnstile widget for `poul.kr`. Add `poul.kr` and
`www.poul.kr` if it is used. Put the public site key in the static-site build
environment below, and keep the secret key only in Vercel as
`TURNSTILE_SECRET`.

## 3. Enable The Static Widget

The two values below are public configuration and are intentionally read only
at build time. Do not commit them to `_config*.yml`.

```sh
export WALINE_SERVER_URL='https://comments.poul.kr'
export WALINE_TURNSTILE_SITE_KEY='<cloudflare-turnstile-site-key>'
npm run clean
npm run build
```

The generated HTML then loads Waline v3 with nickname-only, no-login settings.
Without both variables, no comment assets or widget are generated.

## 4. Verify Before Publishing

1. Open a post and confirm the comment form appears.
2. Submit a harmless test comment with only a nickname.
3. Submit a second one from the same IP immediately; it must be rejected until
   30 seconds pass.
4. Confirm the first comment is visible immediately and can be removed from
   the administrator UI.
5. Verify browser developer tools do not show CORS or Turnstile errors.

Official references:

- https://waline.js.org/en/guide/deploy/vercel.html
- https://waline.js.org/en/reference/server/env.html
- https://waline.js.org/en/reference/client/props.html
