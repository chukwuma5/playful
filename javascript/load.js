        document.querySelector('.loader-section').style.visibility = 'visible';
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.main').classList.remove('.loader-section');

        
        setTimeout(() => {
            document.querySelector('.main').classList.remove('.loader-section');
            document.querySelector('.loader-section').style.display = 'none';
            document.querySelector('.main').style.display = 'block';
        }, 7000);