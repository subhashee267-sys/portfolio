import React from 'react';
import { Helmet } from 'react-helmet-async';
import { resumeData } from '../data/resume';

const SEO = ({ title, description }) => {
    const siteTitle = resumeData.personal.name;
    const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || resumeData.personal.objective;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
