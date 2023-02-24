const allItemsToClick = document.querySelectorAll('.how-help-item');

allItemsToClick.forEach(async (element, key) => {
    element.addEventListener('click', async () => {
        if(!element.classList.contains('active')) {
            element.classList.add('active');
        }

        removeActiveFromSiblings(element);

        const target = document.querySelector(`[data-target='${element.dataset.item}']`);
        
        removeActiveFromSiblings(target);

        target.classList.add('active');
    });
});


const getSiblings = function (elem) {

	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};

const removeActiveFromSiblings = (element, classCss = 'active') => {
    getSiblings(element).forEach(async (ele, index) => {
        console.log(ele);
        ele.classList.remove(classCss);
    });
}

const allTabItems = document.querySelectorAll('.proccess-tab-item');

allTabItems.forEach(async (element, key) => {
    element.addEventListener('click', async () => {
        if(!element.classList.contains('active')) {
            element.classList.add('active');
        }

        removeActiveFromSiblings(element);

        const target = document.querySelectorAll(`[data-target-tab='${element.dataset.item}']`);

        target.forEach(async (ele, key) => {
            removeActiveFromSiblings(ele);
            
            ele.classList.add('active');
        });

    });
});

const allAccordeonTabs = document.querySelectorAll('.faq-label');
allAccordeonTabs.forEach(async (element, key) => {
    element.addEventListener('click', async () => {
        const faqContainer = element.parentNode;
        if(!faqContainer.classList.contains('faq-item__open')) {
            faqContainer.classList.add('faq-item__open');
        } else {
            faqContainer.classList.remove('faq-item__open');
        }

        removeActiveFromSiblings(faqContainer, 'faq-item__open');
    });
});