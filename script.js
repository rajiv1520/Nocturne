document.addEventListener('DOMContentLoaded', () => {
    // Initialize Particles JS for the background
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Interactive Hero Image Effect (3D tilt)
    const heroImage = document.getElementById('heroImage');
    const heroContainer = document.querySelector('.hero-image-container');

    heroContainer.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
    });

    heroContainer.addEventListener('mouseenter', () => {
        heroImage.style.transition = 'none';
        heroImage.style.animation = 'none';
    });

    heroContainer.addEventListener('mouseleave', () => {
        heroImage.style.transition = 'transform 0.5s ease';
        heroImage.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0px)`;
        heroImage.style.animation = 'float 6s ease-in-out infinite';
    });

    // Download Button Click effect
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', (e) => {
        // Remove preventDefault in prod so the file actually downloads
        // e.preventDefault(); 
        
        // Add a nice ripple or success effect
        const originalHtml = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloading...';
        downloadBtn.style.background = '#4caf50';
        downloadBtn.style.boxShadow = '0 10px 30px rgba(76, 175, 80, 0.4)';
        
        setTimeout(() => {
            downloadBtn.innerHTML = originalHtml;
            downloadBtn.style.background = '';
            downloadBtn.style.boxShadow = '';
        }, 3000);
    });
});
