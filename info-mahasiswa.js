class InfoMahasiswa extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Ambil data 'nama' dan 'nim' dari atribut HTML
        const nama = this.getAttribute('nama') || 'Nadhin Awwali Fari';
        const nim = this.getAttribute('nim') || '25/568887/NPA/19997';

        this.shadowRoot.innerHTML = `
            <style>
                .info-card {
                    font-family: sans-serif;
                    background-color: #eef7ff; /* Warna biru muda */
                    border: 1px solid #b8d4f0;
                    border-radius: 8px;
                    padding: 16px;
                    width: 300px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    margin-bottom: 20px; /* Memberi jarak ke komponen di bawahnya */
                }
                .nama {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #0d47a1; /* Biru tua */
                    margin-bottom: 4px;
                }
                .nim {
                    font-size: 1rem;
                    color: #333;
                }
            </style>
            <div class="info-card">
                <div class="nama">${nama}</div>
                <div class="nim">${nim}</div>
            </div>
        `;
    }
}

customElements.define('info-mahasiswa', InfoMahasiswa);