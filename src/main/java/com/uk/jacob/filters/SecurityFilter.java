package com.uk.jacob.filters;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MultivaluedMap;
import java.io.IOException;

public class SecurityFilter implements ContainerResponseFilter {

    @Override
    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {
        MultivaluedMap<String, Object> headers = containerResponseContext.getHeaders();

        headers.add("strict-transport-security", "max-age=31536000");
        headers.add("x-content-type-options", "nosniff");
        headers.add("x-frame-options", "SAMEORIGIN");
        headers.add("x-xss-protection", "1;  mode=block");
        headers.add("content-security-policy", "default-src https:; script-src 'unsafe-inline' www.google-analytics.com ajax.googleapis.com platform.twitter.com;");
    }
}