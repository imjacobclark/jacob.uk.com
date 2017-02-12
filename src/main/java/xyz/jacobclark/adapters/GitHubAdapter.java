package xyz.jacobclark.adapters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import xyz.jacobclark.caches.InMemoryCache;
import xyz.jacobclark.models.mappers.GitHubRepository;

import java.util.concurrent.ExecutionException;

@Component
public class GitHubAdapter {
    public static final String GITHUB_USERS_API_URI = "https://api.github.com/users/imjacobclark/repos?per_page=100";
    public static final String GITHUB_REPOSITORY_CACHE_KEY = "gitHubRepositoryCache";
    private final String DEFAULT_VALUE = "0";

    @Autowired
    private InMemoryCache<GitHubRepository[]> gitHubRepositoryCache;

    public String getRepositoriesCount() {
        try {
            GitHubRepository[] gitHubRepositories = gitHubRepositoryCache.get(GITHUB_REPOSITORY_CACHE_KEY);

            if(gitHubRepositories == null) return DEFAULT_VALUE;

            return String.valueOf(gitHubRepositories.length);
        } catch (ExecutionException e) {
            return DEFAULT_VALUE;
        }
    }

    public static GitHubRepository[] get(RestTemplate restTemplate) {
        return restTemplate.getForObject(GITHUB_USERS_API_URI, GitHubRepository[].class);
    }
}
