const menuBtn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");
        const botaoX = document.getElementById('btnCancelar');
        let aberto = false;


        menuBtn.addEventListener('click', () => {
            aberto = !aberto;

            menu.classList.toggle('active');

            if (aberto) {
                botaoX.style.display = 'block'; // mostra o botão X
                menuBtn.style.display = 'none'; // esconde o botão ☰
                document.body.style.overflow = 'hidden';
            } else {
                botaoX.style.display = 'none'; // esconde o botão X
                menuBtn.style.display = 'block'; // mostra o botão ☰
                document.body.style.overflow = 'auto'; // libera o scroll
            }
        });

        botaoX.addEventListener('click', () => {
            menu.classList.remove('active');
            botaoX.style.display = 'none';
            menuBtn.style.display = 'block';
            document.body.style.overflow = 'auto';
            aberto = false;
        }); 

        if (window.matchMedia("(max-width: 1017px)").matches) {
            menu.addEventListener('click', () => {
                menu.classList.remove('active');
                botaoX.style.display = 'none';
                menuBtn.style.display = 'block';
                document.body.style.overflow = 'auto';
                aberto = false;
            });
        }