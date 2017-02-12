package xyz.jacobclark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import xyz.jacobclark.adapters.GitHubAdapter;
import xyz.jacobclark.caches.InMemoryCache;
import xyz.jacobclark.models.mappers.GitHubRepository;

@SpringBootApplication
public class WebsiteApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebsiteApplication.class, args);
    }

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public InMemoryCache<GitHubRepository[]> getGitHubRepositoryInMemoryCache() {
        return new InMemoryCache<>((key -> GitHubAdapter.get(getRestTemplate())));
    }
}
