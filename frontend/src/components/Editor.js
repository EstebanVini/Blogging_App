import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importamos los estilos de Quill
import axios from 'axios';
import { FaSave, FaEye } from 'react-icons/fa'; // Iconos para botones

const Editor = () => {
  const [content, setContent] = useState('');

  // Función para guardar el blog
  const handleSave = async () => {
    const htmlContent = content; // Contenido del blog en formato HTML
    try {
      const response = await axios.post('/api/blogs', { content: htmlContent });
      alert('Blog guardado con éxito');
    } catch (error) {
      console.error('Error al guardar el blog', error);
    }
  };

  // Función para mostrar la vista previa en una ventana flotante
  const handlePreview = () => {
    const previewWindow = window.open("", "Vista previa", "width=800,height=600");
    previewWindow.document.write(content);
    previewWindow.document.title = "Vista previa del blog";
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }], // Fuente y tamaño
      ['bold', 'italic', 'underline', 'strike'], // Negrita, cursiva, subrayado, tachado
      [{ 'color': [] }, { 'background': [] }], // Colores de letra y fondo
      [{ 'script': 'sub' }, { 'script': 'super' }], // Subíndice y superíndice
      [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'], // Encabezados, citas y código
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Listas numeradas y con viñetas
      ['link', 'image', 'video'], // Hipervínculos, imágenes y videos
      ['clean'], // Limpiar formato
    ],
  };

  const formats = [
    'font', 'size', 'bold', 'italic', 'underline', 'strike', 'color', 'background',
    'script', 'sub', 'super', 'header', 'blockquote', 'code-block',
    'list', 'bullet', 'link', 'image', 'video'
  ];

  return (
    <div className="editor-container">
      <h2>Crear un nuevo blog</h2>
      {/* Editor agrandado */}
      <div className="editor-wrapper">
        <ReactQuill 
          value={content} 
          onChange={setContent} 
          modules={modules} 
          formats={formats} 
          theme="snow" 
        />
      </div>
      {/* Botones al final de la página */}
      <div className="buttons-container">
        <button className="preview-btn" onClick={handlePreview}>
          <FaEye /> Vista previa en HTML
        </button>
        <button className="save-btn" onClick={handleSave}>
          <FaSave /> Guardar blog
        </button>
      </div>
    </div>
  );
};

export default Editor;
