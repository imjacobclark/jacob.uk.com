package xyz.jacobclark.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import xyz.jacobclark.adapters.GitHubAdapter;
import xyz.jacobclark.repositories.PageRepository;

import java.util.Map;
import java.util.concurrent.ExecutionException;

@Controller
public class HomeController {
    private final String HOMEPAGE_PATH = "/";

    private GitHubAdapter gitHubAdapter;
    private PageRepository pageRepository;

    @Autowired
    HomeController(GitHubAdapter gitHubAdapter, PageRepository pageRepository) {
        this.gitHubAdapter = gitHubAdapter;
        this.pageRepository = pageRepository;
    }

    @RequestMapping(value = HOMEPAGE_PATH, method = RequestMethod.GET)
    public String home(Map<String, Object> model) throws ExecutionException {
        model.put("githubRepoCount", gitHubAdapter.getRepositoriesCount());
        model.put("sections", pageRepository.findByPath(HOMEPAGE_PATH).getSections());

        return "home";
    }
}
