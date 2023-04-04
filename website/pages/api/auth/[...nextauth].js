import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb/client"
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: 'starrealms'
    }),
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
          }),
        EmailProvider({
            server: {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.ign = user.ign
            session.user.id = user.id
            return session
        }
    }
}

export default NextAuth(authOptions);