const c = [
    { t: "Allah SWT", tekst: "Allah is our Creator, the one who brought everything into existence. He is the Lord of the heavens and the earth, and everything within them. Allah created the universe with perfect wisdom and balance, from the smallest atom to the vast galaxies. He is the source of life, giving breath to all living beings, and sustains them with His mercy. As our Creator, Allah knows everything about us—our thoughts, our feelings, and our needs. He has power over all things and controls the course of events in the world. Nothing happens without His will, and nothing is beyond His knowledge. Allah is not only powerful but also compassionate and merciful. He provides for all His creation, regardless of their actions, showing kindness and forgiveness to those who turn to Him in sincerity. Allah's creation is a sign of His greatness, and through reflecting on the world around us, we come to realize His existence and majesty. He sent prophets and scriptures, including the Qur'an, to guide humanity on the right path, teaching us how to live in harmony with His creation and fulfill the purpose for which we were created to worship and serve Him.", image: "Image2.jpg"},
    { t: "Muhammad SAW", tekst: "Prophet Muhammad (peace and blessings be upon him) is the final messenger and prophet of Islam, sent by Allah to guide humanity. He is known as the Seal of the Prophets, meaning that he is the last in a long line of prophets, including Adam, Nuh, Ibrahim, Musa, and Isa (peace be upon them all). His mission was to convey the message of Islam, calling people to worship Allah alone and live righteous, just lives.", image: "images.png" },
    { t: "Isa AS", tekst: "Prophet Isa (peace be upon him) is one of the greatest prophets in Islam, sent by Allah to guide humanity. He was born miraculously to Maryam without a father, a sign of Allah’s power and will. Isa (AS) is a beloved and honored figure, known for his piety, humility, and devotion to Allah.", image: "image_1.png" },
    { t: "Musa AS", tekst: "Prophet Musa (peace be upon him) is one of the greatest prophets in Islam. He was chosen by Allah to lead the Children of Israel and to guide them to the worship of Allah alone. Prophet Musa (AS) is highly revered for his courage, patience, and deep faith in Allah.", image: "image3.png" },
    { t: "Ibrahim AS", tekst: "Prophet Ibrahim (peace be upon him) is one of the greatest prophets and a key figure in Islam. He is regarded as the father of monotheism and is honored as Khalilullah (the Friend of Allah) for his deep faith and unwavering dedication to the worship of Allah alone.", image: "image4.webp" }
];

function finnfinn() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const informa = document.getElementById('informa');
    informa.innerHTML = '';

    const x = c.filter(d => 
        d.t.toLowerCase().includes(input)
    );

    if (x.length > 0) {
        x.forEach(d => {
            const diverse = document.createElement('div');
            diverse.innerHTML = `
                <h3>${d.t}</h3>
                <p>${d.tekst}</p>
                <img src="${d.image}" alt="${d.t}" style="width:100px;height:100px;">
            `;
            informa.appendChild(diverse);
        });
    } else {
        informa.innerHTML = '<p>Ingen ansatte funnet.</p>';
    }

    document.getElementById('searchInput').value = '';
}
