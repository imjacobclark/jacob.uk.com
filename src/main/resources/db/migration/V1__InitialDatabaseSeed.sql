CREATE TABLE pages (
    page_id      SERIAL PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    path    VARCHAR(255) NOT NULL
);

CREATE TABLE sections (
    section_id      SERIAL PRIMARY KEY,
    title   VARCHAR(255) NOT NULL,
    body    TEXT NOT NULL,
    slug    VARCHAR(255) NOT NULL,
    page_id INT,
    FOREIGN KEY (page_id) REFERENCES pages (page_id)
);