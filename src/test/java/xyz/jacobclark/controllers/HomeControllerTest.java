package xyz.jacobclark.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import xyz.jacobclark.adapters.GitHubAdapter;
import xyz.jacobclark.models.entities.Page;
import xyz.jacobclark.models.entities.Section;
import xyz.jacobclark.repositories.PageRepository;

import java.util.HashSet;
import java.util.Set;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(HomeController.class)
public class HomeControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private GitHubAdapter gitHubAdapter;

    @MockBean
    private PageRepository pageRepository;

    @Test
    public void addGitHubRepoCountOntoModel() throws Exception {
        Page page = new Page(1, "page", "/", null);
        Set<Section> sections = new HashSet<>();
        sections.add(new Section(1, "Homepage", "Hello World", "slug", page));
        page.setSections(sections);

        when(gitHubAdapter.getRepositoriesCount()).thenReturn("42");
        when(pageRepository.findByPath("/")).thenReturn(page);

        mvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(view().name("home"))
                .andExpect(model().attribute("githubRepoCount", "42"));
    }

    @Test
    public void addSectionsOntoModel() throws Exception {
        Page page = new Page(1, "page", "/", null);
        Set<Section> sections = new HashSet<>();
        sections.add(new Section(1, "Homepage", "Hello World", "slug", page));
        page.setSections(sections);

        when(gitHubAdapter.getRepositoriesCount()).thenReturn("42");
        when(pageRepository.findByPath("/")).thenReturn(page);

        mvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(view().name("home"))
                .andExpect(model().attribute("sections", sections));
    }
}