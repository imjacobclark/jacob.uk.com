package com.uk.jacob.filters;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AssetCacheControlFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletResponse httpServletResponse = ((HttpServletResponse) response);
        httpServletResponse.addHeader("Cache-Control", "public, max-age=86400");
        httpServletResponse.addHeader("Cache-Control", "immutable");

        chain.doFilter(request, httpServletResponse);
    }

    @Override
    public void destroy() {
    }

}
