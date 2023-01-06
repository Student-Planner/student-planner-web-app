import React, { Fragment } from "react";
import Head from "next/head";
import SignupModule from "@/components/auth/SignupModule";

type Props = {};

export default function Signup({ }) {
    return (
        <>
            <Head>
                <title>Login - Student Planner</title>
            </Head>
            <SignupModule />
        </>
    );
}
