// Change these IDs to match your own header and top bar ID.
const HEADER_ID = "header-primary";
const TOPBAR_ID = "topbar-primary";


document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById(HEADER_ID);
    const topbar = document.getElementById(TOPBAR_ID);

    if (!header || !topbar) return;

    const spacer = document.createElement("div");
    spacer.id = "header-spacer";

    header.parentNode.insertBefore(spacer, header);

    function updateSpacerHeight() {
        spacer.style.height = header.offsetHeight + "px";
    }

    function stickyHeader() {

        const trigger = topbar.offsetHeight - 5;

        if (window.scrollY > trigger) {

            if (!header.classList.contains("is-sticky")) {

                updateSpacerHeight();

                header.classList.add("is-sticky");
                spacer.classList.add("active");

            }

        } else {

            if (header.classList.contains("is-sticky")) {

                header.classList.remove("is-sticky");
                spacer.classList.remove("active");

                spacer.style.height = "0px";

            }

        }

    }

    stickyHeader();

    window.addEventListener("scroll", stickyHeader);

    window.addEventListener("resize", () => {

        if (header.classList.contains("is-sticky")) {
            updateSpacerHeight();
        }

        stickyHeader();

    });

});