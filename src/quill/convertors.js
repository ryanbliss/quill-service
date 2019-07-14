import Quill from 'quill';

var editor = new Quill('#editor', {
    placeholder: 'Start typing your notes...',
});

export default function htmlToDelta(html) {
    editor.root.innerHTML = html;
    return editor.getContents();
}

export default function deltaToHtml(delta) {
    editor.updateContents(delta, 'api');
    return editor.root.innerHTML;
}

export default function deltaToString(delta) {
    editor.updateContents(delta, 'api');
    return editor.getText();
}
