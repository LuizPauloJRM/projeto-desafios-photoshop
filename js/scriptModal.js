  function openLogin() {
            document.getElementById('loginModal').style.display = 'flex';
        }

        function closeLogin() {
            document.getElementById('loginModal').style.display = 'none';
        }

        // Fecha o modal ao clicar fora
        window.addEventListener('click', function (e) {
            const modal = document.getElementById('loginModal');
            if (e.target === modal) closeLogin();
        });