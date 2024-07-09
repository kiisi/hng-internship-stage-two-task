/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';
import { META_DESCRIPTION, META_TITLE } from '../constants/config';

export default function Seo({ 
    title, 
    description = META_DESCRIPTION, 
    children }) {

    const siteTitle = title ? title + " | " + META_TITLE : title

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name='description' content={description} />
            {/* <meta property="og:type" content={type} /> */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta name="twitter:creator" content={name} /> */}
            {/* <meta name="twitter:card" content={type} /> */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { children }
        </Helmet>
    )
}