{
    const revewPP = () => {
        const script = document.querySelector('script[data-revew-container]');
        if (!script) return alert('Add widget container class name inside data-revew-container attribute in script tag')
        const style = document.createElement('style')
        style.innerHTML = `
            .revew-logo {
                max-width: 100%;
                margin-top: 1em;
            }
            .revew-content {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                gap: 1em;
            }
            .${script.dataset.revewContainer}{
          
                font-family: 'Ubuntu Mono', monospace;    
                background: #212121;
                color: #fff;
                border-radius: .6em;
                padding: .5em .8em;
             }
             .${script.dataset.revewContainer} h2 {
                 font-weight: normal;
                 font-size: 1.5em;
             }
             .${script.dataset.revewContainer} span, b {
                 color: #24a77f;
             }
        `
    
        document.head.append(style)
      
        const container = document.querySelector(`.${script.dataset.revewContainer}`)
    
        container.innerHTML = `
           <img src="https://i.ibb.co/7z1dJSW/revew.png" class="revew-logo" />
           <div class="revew-content">
                <h2><b>9.5</b> Score </h2>
                <h2><b> 587</b> Reviews</h2>
           </div>
        
        
        `;
    }
    window.addEventListener('load', revewPP)
}

