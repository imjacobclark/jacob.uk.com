package com.uk.jacob.resources;

import com.uk.jacob.views.HomepageView;
import io.dropwizard.jersey.caching.CacheControl;
import org.apache.http.client.HttpClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.concurrent.TimeUnit;

@Path("/")
@Produces(MediaType.TEXT_HTML)
public class HomepageResource {
    private HttpClient httpClient;

    public HomepageResource(HttpClient httpClient) {
        this.httpClient = httpClient;
    }

    @GET
    public HomepageView getPerson() {
        return new HomepageView(this.httpClient);
    }
}