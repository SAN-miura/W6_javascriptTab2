(() => {
    class Tab {
    //初期化
    constructor(obj){
        const $elm = document.querySelector('#' + obj.hookName);
        const $trigger = $elm.getElementsByTagName(obj.tagName);
        this.tab = document.getElementById(obj.hookName);
        this.content = this.tab.querySelectorAll('[data-content]');
        this.content[0].style.display = 'block';
        const triggerLen = $trigger.length;
        let index = 0;
        while (index < triggerLen){
            $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
            index++;
        }
    }

    clickHandler = (e) => {
        e.preventDefault();
        const $this = e.target;
        const ACTIVE_CLASS = 'is-active';
        const $nav = this.tab.querySelectorAll('[data-nav]');
        const navLen = $nav.length;
        const targetVal = $this.dataset.nav;
        this.content[0].style.display = 'block';
        let index = 0;
        while(index < navLen){
            this.content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }
        this.tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };
}

    const $Tab = new Tab({
    hookName: 'js-tab',
    tagName: 'a',
});

}) ();
