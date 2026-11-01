---
sidebar_position: 9
keywords: ['2fa', 'two-factor authentication', 'two factor', '2-factor', 'authenticator', 'totp', 'recovery codes', 'security', 'fragnet dashboard']
---

# Two-factor authentication

Two-factor authentication (2FA) protects your Fragnet account with a second step. After your password, the dashboard asks for a 6-digit code from an authenticator app on your phone. It protects your own sign-in, including every account you have access to as a team member.

:::warning Keep your recovery codes safe
When you turn on 2FA, you get a set of recovery codes. If you lose the device with your authenticator app, a recovery code is the only way to sign in yourself. Each code works once. Store them somewhere safe that isn't your phone, such as a password manager.

If you lose both your authenticator app and your recovery codes, use the **Contact support** link on the sign-in page (shown after you select **Use a recovery code**), or go to [fragnet.net/contact](https://fragnet.net/contact). We help you back in once we've checked that it's you.
:::

## Before you start

- Install an authenticator app. Any TOTP app works, for example 1Password, Aegis or Google Authenticator.
- You need your account password. If you only sign in with Google, Discord or Steam, set a password first:
  1. Log out of the dashboard.
  2. On the login page, select **Forgot password?**.
  3. Enter your email address and select **Send reset link**.
  4. Open the link in the email, choose a password and select **Update password**.

## Turn on 2FA

1. Open the [Fragnet dashboard](VAR::PANEL_URL), select **Account** in the sidebar, then the **Security** tab. On a phone, select **Account** > **Security & 2FA**. You can also go straight to the [Security tab](VAR::PANEL_URL/profile?tab=security).
2. In the **Sign-in** card, find **Two-Factor Authentication** (it shows **Off**) and select **Set up 2FA**.
3. Enter your **Current Password** and select **Continue setup**.
4. Under "1. Scan the code with your authenticator app", scan the QR code with your app. If you can't scan it, use the key shown after "Can't scan? Enter this key:" and enter it in your app by hand.
5. Under "2. Enter the 6-digit code from the app", enter the code your app shows.
6. Select **Turn on**. This signs out your other devices.
7. Under **Save your recovery codes**, select **Copy all** or **Download .txt** and store the codes safely. They're only shown this once.
8. Select **I've saved them** (or **I've saved them, sign in** if the dashboard asks you to sign in again).

**Two-Factor Authentication** now shows **On**.

<!-- screenshot: 2fa-setup.png | Account > Security tab, Sign-in card: 2FA setup in progress with the QR code, the "Can't scan? Enter this key:" line, the 6-digit code field and the Turn on button. Blur the QR code and key. -->

:::tip
The setup request expires after a while. If you see "This setup request has expired. Close it and start again.", select **Cancel** and start again from **Set up 2FA**.
:::

## Sign in with 2FA

1. Sign in with your email or username and password as usual.
2. On **Two-factor check**, enter the 6-digit code from your authenticator app.
3. Select **Verify**.

If you don't have your authenticator app, select **Use a recovery code**, enter one of your recovery codes and select **Verify**. That code can't be used again.

## Create new recovery codes

Create new codes when you've used some up, or if you think someone else has seen them.

1. Open the **Security** tab and select **Recovery codes** next to **Two-Factor Authentication**. You see how many codes you have left.
2. Enter the **Authentication code** from your authenticator app.
3. Select **Create new codes**. Your old codes stop working.
4. Save the new codes as in the setup steps above.

If you see "Sign out and sign in again with your authenticator code to manage recovery codes.", sign out, sign in with a code from your app, and try again.

## Turn off 2FA

1. Open the **Security** tab and select **Turn off** next to **Two-Factor Authentication**.
2. Under **Turn off two-factor authentication**, enter your **Current Password**.
3. Enter a code from your authenticator app, or one of your recovery codes, in **Authenticator or recovery code**.
4. Select **Turn off**. You see "Two-factor authentication is off."
