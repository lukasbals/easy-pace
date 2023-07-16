import NextAuth from "next-auth";
import StravaProvider from "next-auth/providers/strava";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    StravaProvider({
      clientId: "110661",
      clientSecret: "f76a09809fe6ae5904f63f4401b232273d0e7aa1",
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
export default NextAuth(authOptions);
