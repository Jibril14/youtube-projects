// ==========================
// JS
// ==========================

// Change these IDs to match your own header IDs
const DESKTOP_HEADER_ID = "header-desktop";
const MOBILE_HEADER_ID = "header-mobile";

// Change this ID to match your Top Bar
const TOPBAR_ID = "topbar-primary";

document.addEventListener("DOMContentLoaded", () => {

    const desktopHeader = document.getElementById(DESKTOP_HEADER_ID);
    const mobileHeader = document.getElementById(MOBILE_HEADER_ID);

    const topbar = document.getElementById(TOPBAR_ID);

    const header = window.innerWidth <= 767
        ? mobileHeader
        : desktopHeader;

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

        updateSpacerHeight();
        stickyHeader();

    });

});
