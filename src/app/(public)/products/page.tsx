import styles from "./page.module.css";
export default function Products() {
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.main_title}>
                    <h2>My <span> Blogs</span> <span className={styles.bg_text}>My Blogs</span></h2>
                </div>
                <div className={styles.blogs}>
                    <div className={styles.blog}>
                        <img src="img/blog.png" alt=""/>
                            <div className={styles.blog_text}>
                                <h4> How to create Your web site</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Laudantium sint cumque accusantium accusamus consectetur nemo,
                                    doloremque ad minima consequatur earum non sed dicta quibusdam fugit
                                    repellat numquam quam sequi beatae.
                                </p>
                            </div>
                    </div>
                    <div className={styles.blogs}>
                        <img src="img/blog.png" alt=""/>
                            <div className={styles.blog_text}>
                                <h4> How to create Your web site</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Laudantium sint cumque accusantium accusamus consectetur nemo,
                                    doloremque ad minima consequatur earum non sed dicta quibusdam fugit
                                    repellat numquam quam sequi beatae.
                                </p>
                            </div>
                    </div>
                    <div className={styles.blogs}>
                        <img src="img/blog.png" alt=""/>
                            <div className={styles.blog_text}>
                                <h4> How to create Your web site</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Laudantium sint cumque accusantium accusamus consectetur nemo,
                                    doloremque ad minima consequatur earum non sed dicta quibusdam fugit
                                    repellat numquam quam sequi beatae.
                                </p>
                            </div>
                    </div>
                    <div className={styles.blogs}>
                        <img src="img/blog.png" alt=""/>
                            <div className={styles.blog_text}>
                                <h4> How to create Your web site</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Laudantium sint cumque accusantium accusamus consectetur nemo,
                                    doloremque ad minima consequatur earum non sed dicta quibusdam fugit
                                    repellat numquam quam sequi beatae.
                                </p>
                            </div>
                    </div>
                </div>
            </div>

        </main>
    )
}