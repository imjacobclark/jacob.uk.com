package xyz.jacobclark;

import org.junit.Test;
import org.springframework.web.client.RestTemplate;
import xyz.jacobclark.caches.InMemoryCache;
import xyz.jacobclark.models.mappers.GitHubRepository;

import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.when;

public class WebsiteApplicationTest {
    @Test
    public void getRestTemplate() throws Exception {
        WebsiteApplication websiteApplication = new WebsiteApplication();
        assertThat(websiteApplication.getRestTemplate(), instanceOf(RestTemplate.class));
    }

    @Test
    public void getGitHubRepositoryInMemoryCache() throws Exception {
        WebsiteApplication websiteApplication = new WebsiteApplication();
        assertThat(websiteApplication.getGitHubRepositoryInMemoryCache(), instanceOf(InMemoryCache.class));
    }
}