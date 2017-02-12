package xyz.jacobclark.models.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "pages")
public class Page {
    private int pageId;
    private String name;
    private String path;
    private Set<Section> sections;

    protected Page() {
    }

    public Page(int pageId, String name, String path, Set<Section> sections) {
        this.pageId = pageId;
        this.name = name;
        this.path = path;
        this.sections = sections;
    }

    @Id
    @GeneratedValue
    @Column(name = "page_id")
    public int getPageId() {
        return this.pageId;
    }

    public void setPageId(int pageId) {
        this.pageId = pageId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return this.path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "page")
    @OrderBy("section_id ASC")
    public Set<Section> getSections() {
        return this.sections;
    }

    public void setSections(Set<Section> sections) {
        this.sections = sections;
    }
}
