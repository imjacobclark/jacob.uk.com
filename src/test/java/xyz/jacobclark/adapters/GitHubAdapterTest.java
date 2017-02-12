package xyz.jacobclark.adapters;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.client.RestTemplate;
import xyz.jacobclark.caches.InMemoryCache;
import xyz.jacobclark.models.mappers.GitHubRepository;

import java.util.concurrent.ExecutionException;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class GitHubAdapterTest {
    public static final String GITHUB_USERS_API_URI = "https://api.github.com/users/imjacobclark/repos?per_page=100";

    @InjectMocks
    GitHubAdapter gitHubAdapter;

    @Mock
    InMemoryCache<GitHubRepository[]> inMemoryCache;

    @Mock
    RestTemplate restTemplate;

    @Test
    public void getGitHubRepositoryCount__returns3__When3RepositoriesAreReturnedFromCache() throws Exception {
        GitHubRepository[] gitHubRepositories = {new GitHubRepository(), new GitHubRepository(), new GitHubRepository()};

        when(inMemoryCache.get(anyString())).thenReturn(gitHubRepositories);

        assertThat(gitHubAdapter.getRepositoriesCount(), is("3"));
    }

    @Test
    public void getGitHubRepositoryCount__returnsDefaultValueOf0__WhenCacheReturnsNull() throws Exception {
        when(inMemoryCache.get(anyString())).thenReturn(null);

        assertThat(gitHubAdapter.getRepositoriesCount(), is("0"));
    }

    @Test
    public void getGitHubRepositoryCount__callsCacheWithCorrectCacheKey() throws Exception {
        GitHubRepository[] gitHubRepositories = {new GitHubRepository()};

        when(inMemoryCache.get(anyString())).thenReturn(gitHubRepositories);

        assertThat(gitHubAdapter.getRepositoriesCount(), is("1"));

        verify(inMemoryCache, times(1)).get("gitHubRepositoryCache");
    }

    @Test
    public void getGitHubRepositoryCount__shouldReturn0__whenExceptionIsThrown() throws Exception {
        when(inMemoryCache.get(anyString())).thenThrow(ExecutionException.class);

        assertThat(gitHubAdapter.getRepositoriesCount(), is("0"));

        verify(inMemoryCache, times(1)).get("gitHubRepositoryCache");
    }

    @Test
    public void get__callRestTemplateWithExpectedParameters() throws Exception {
        GitHubAdapter.get(restTemplate);
        verify(restTemplate, times(1)).getForObject(GITHUB_USERS_API_URI, GitHubRepository[].class);
    }
}