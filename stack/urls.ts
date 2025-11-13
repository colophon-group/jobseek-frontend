import type { HandlerUrls } from "@stackframe/stack";

const handlerBasePath = "/handler";

export const stackHandlerUrls: HandlerUrls = {
    handler: handlerBasePath,
    signIn: `${handlerBasePath}/signin`,
    signUp: `${handlerBasePath}/signup`,
    afterSignIn: "/dashboard",
    afterSignUp: "/dashboard",
    signOut: `${handlerBasePath}/signout`,
    afterSignOut: "/",
    emailVerification: `${handlerBasePath}/email-verification`,
    passwordReset: `${handlerBasePath}/reset-password`,
    forgotPassword: `${handlerBasePath}/forgot-password`,
    home: "/",
    oauthCallback: `${handlerBasePath}/oauth/callback`,
    magicLinkCallback: `${handlerBasePath}/magic-link/callback`,
    accountSettings: `${handlerBasePath}/account`,
    teamInvitation: `${handlerBasePath}/team-invitation`,
    mfa: `${handlerBasePath}/mfa`,
    error: `${handlerBasePath}/error`,
};
