package xyz.jacobclark.models.entities;

import javax.persistence.*;

@Entity
@Table(name = "sections")
public class Section {
    private int sectionId;
    private String title;
    private String body;
    private String slug;
    private Page page;

    protected Section() {
    }

    public Section(int sectionId, String title, String body, String slug, Page page) {
        this.sectionId = sectionId;
        this.title = title;
        this.body = body;
        this.slug = slug;
        this.page = page;
    }

    @Id
    @GeneratedValue
    @Column(name = "section_id")
    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId){
        this.sectionId = sectionId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "page_id", nullable = false)
    public Page getPage() {
        return this.page;
    }

    public void setPage(Page page){
        this.page = page;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body){
        this.body = body;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug){
        this.slug = slug;
    }
}
