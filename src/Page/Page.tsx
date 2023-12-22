import { PageConstructor, PageConstructorProvider, PageContent, WithChildren } from '@gravity-ui/page-constructor';
import React, { useState } from 'react';

const Page = ({ content }: WithChildren<PageContent | any>) => (
    <PageConstructorProvider>
        <PageConstructor content={content} />
    </PageConstructorProvider>
);

export default Page