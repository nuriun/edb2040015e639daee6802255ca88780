import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';
import LayoutContent from '@/components/LayoutContent';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'Ski products!' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
            <meta name='robots' content='noindex' />
        </Head>
        <Header />
        <LayoutContent>{children}</LayoutContent>
    </>
);

export default Layout;
