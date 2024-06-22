const insertt = document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
    insertt.innerHTML = `
    <div class='color'>
        <table>
            <tr>
                <td>Key</td>
                <td>KeyCode</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>${e.key===" "? "space": e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
})