"use strict";
import courses from './courses.json' with { type: 'json' };

class CardComponent extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Default Title';
        const lessonCount = this.getAttribute('lesson-count') || 0;
        const description = this.getAttribute('description') || 'Default Description';
        let enableExpand = false;

        this.innerHTML = `
        <div class="course-container">
            <section class="course-card">
                <div>
                    <h3>${title}</h3>
                    <h5>0/${lessonCount} Completado</h5>
                </div>
                <span class="material-symbols-outlined" id="expand-icon">
                    expand_more
                </span>
            </section>
            <section class="course-description" id="course-description" style="display: none">
                <p>${description}</p>
            </section>
        </div>
        `;

        const expandIcon = this.querySelector('#expand-icon');
        const courseDescription = this.querySelector('#course-description');

        expandIcon.addEventListener('click', () => {
            enableExpand = !enableExpand;
            if (enableExpand) {
                courseDescription.style.display = 'flex';
            } else {
                courseDescription.style.display = 'none';
            }
        });
    }
}

function showCards(){
    const coursesContainer = document.getElementById('main-container');
    courses.forEach(course => {
        const card = document.createElement('card-component');
        card.setAttribute('title', course.title);
        card.setAttribute('lesson-count', course.lessons.length);
        card.setAttribute('description', course.description);
        coursesContainer.appendChild(card);
    });
}

customElements.define('card-component', CardComponent);
showCards();