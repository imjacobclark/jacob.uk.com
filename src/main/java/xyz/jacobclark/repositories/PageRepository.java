package xyz.jacobclark.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import xyz.jacobclark.models.entities.Page;

import java.util.List;

@Repository
public interface PageRepository extends CrudRepository<Page, String> {
    List<Page> findByPageId(String pageId);
    List<Page> findByName(String name);
    Page findByPath(String path);
}