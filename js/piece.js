function repositionNotes() {
    const notes = Array.from(document.querySelectorAll('.right-notes .footnote'));
    let lastBottom = 0;
    notes.forEach(note => {
        note.style.top = ''; // reset
        const top = note.offsetTop - note.clientHeight / 2; // account for translateY(-50%)
        const adjusted = Math.max(top, lastBottom + 5);
        note.style.top = (adjusted + note.clientHeight / 2) + 'px'; // compensate back
        lastBottom = adjusted + note.clientHeight;
    });
}

document.addEventListener("DOMContentLoaded", repositionNotes);
window.addEventListener("resize", () => {
    clearTimeout(window._rnTimer);
    window._rnTimer = setTimeout(repositionNotes, 100);
});


// function updateColor() {
//     const markers = $('.color-marker').toArray()
//         .map(el => ({
//             y: $(el).offset().top,
//             color: $(el).data('color')
//         }))
//         .sort((a, b) => a.y - b.y);

//     if (markers.length === 0) return;

//     const center = window.scrollY + window.innerHeight / 2;
//     const root = document.documentElement;

//     if (center <= markers[0].y) {
//         root.style.setProperty('--fg-color', markers[0].fg_color);
//     } else if (center >= markers[markers.length - 1].y) {
//         root.style.setProperty('--fg-color', markers[markers.length - 1].fg_color);
//     } else {
//         const i = markers.findIndex(m => m.y > center) - 1;
//         const a = markers[i], b = markers[i + 1];
//         const t = Math.round(((center - a.y) / (b.y - a.y)) * 100);
//         root.style.setProperty('--fg-color',
//             `color-mix(in srgb, ${a.fg_color} ${100 - t}%, ${b.fg_color})`);
//     }
// }

// $(document).ready(updateColor);
// $(window).on('scroll', updateColor);

// $(function(){
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const el = $(entry.target);
//                 const root = document.documentElement;
//                 console.log(`About to set colors to ${el.data('bg-color')} and ${el.data('fg-color')}`);

//                 root.style.setProperty('--bg-color', hexToRgb(el.data('bg-color')));
//                 root.style.setProperty('--fg-color', hexToRgb(el.data('fg-color')));
//             }
//         });
//     }, { rootMargin: '-45% 0px -45% 0px' });

//     $('.color-marker').each((_, el) => observer.observe(el));
// });


function hexToRgbObj(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) };
}

function lerpColor(c1, c2, t) {
    return {
        r: Math.round(c1.r + t * (c2.r - c1.r)),
        g: Math.round(c1.g + t * (c2.g - c1.g)),
        b: Math.round(c1.b + t * (c2.b - c1.b))
    };
}

function rgbObjToString(c) {
    return `${c.r}, ${c.g}, ${c.b}`;
}

function updateScrollColors() {
    const markers = $('.color-marker').toArray()
        .map(el => ({
            y: $(el).offset().top,
            bg: hexToRgbObj($(el).data('bg-color')),
            fg: hexToRgbObj($(el).data('fg-color'))
        }))
        .sort((a, b) => a.y - b.y);

    if (markers.length === 0) return;

    const focus = window.scrollY + window.innerHeight / 5;
    const root = document.documentElement;

    let bg, fg;
    if (focus <= markers[0].y) {
        bg = markers[0].bg; fg = markers[0].fg;
    } else if (focus >= markers[markers.length - 1].y) {
        bg = markers[markers.length - 1].bg; fg = markers[markers.length - 1].fg;
    } else {
        const i = markers.findIndex(m => m.y > focus) - 1;
        const a = markers[i], b = markers[i + 1];
        const t = (focus - a.y) / (b.y - a.y);
        bg = lerpColor(a.bg, b.bg, t);
        fg = lerpColor(a.fg, b.fg, t);
    }

    root.style.setProperty('--bg-color', rgbObjToString(bg));
    root.style.setProperty('--fg-color', rgbObjToString(fg));
}

$(document).ready();
$(window).on('scroll', updateScrollColors);


$(document).ready(function() {
    updateScrollColors();
    $(".accordion-panel").each(function(idx, elt){
        // console.log(idx,elt);
        let $curr_panel = $(elt);
        let $extracontent = $curr_panel.find(".extra-content").get(0);

        toggle_fun = function(evt) {
            // console.log($curr_panel[0]);
            // "this" should still be the panel
            // $(this).find("i").toggleClass('fa-circle-chevron-left fa-circle-chevron-down');

            if($extracontent.style.maxHeight) {
                $extracontent.style.maxHeight = null;
                $curr_panel.find(".text-folded").show();
                $curr_panel.find(".text-unfolded").hide();
            } else {
                // 1.3 is just buffer in case of page resize. 
                $extracontent.style.maxHeight = (1.3*$extracontent.scrollHeight)+"px";
                $curr_panel.find(".text-unfolded").show();
                $curr_panel.find(".text-folded").hide();
            }
            evt.preventDefault();
        };

        $curr_panel.find(".toggle-button").click(toggle_fun);
        $curr_panel.find(".toggle-bbutton").dblclick(toggle_fun);
    });
});

