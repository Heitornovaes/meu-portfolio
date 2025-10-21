// src/components/Contact.js
import React, { useState } from 'react'; // 1. Importamos o useState
import styles from './Contact.module.css';

const Contact = () => {
  // 2. Criamos "estados" para guardar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // 3. Estados para dar feedback ao usuário
  const [status, setStatus] = useState(''); // 'Enviando...', 'Sucesso', 'Erro'

  // 4. Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // 5. Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página
    setStatus('Enviando...');

    try {
      const response = await fetch('http://localhost:3001/send', { // 6. Nosso endpoint do back-end!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envia os dados do formulário como JSON
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('E-mail enviado com sucesso!');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setStatus(`Erro: ${result.message}`);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      setStatus('Erro: Falha ao conectar com o servidor.');
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.sectionTitle}>Entre em Contato</h2>
      
      {/* 7. Conectamos o handleSubmit ao 'onSubmit' do formulário */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nome</label>
          <input 
            type="text" 
            id="name" 
            className={styles.input} 
            value={formData.name} // 8. Conectamos os inputs ao estado
            onChange={handleChange} // 8. Conectamos os inputs ao estado
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-mail</label>
          <input 
            type="email" 
            id="email" 
            className={styles.input} 
            value={formData.email} // 8. Conectamos os inputs ao estado
            onChange={handleChange} // 8. Conectamos os inputs ao estado
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Mensagem</label>
          <textarea 
            id="message" 
            rows="6" 
            className={styles.textarea} 
            value={formData.message} // 8. Conectamos os inputs ao estado
            onChange={handleChange} // 8. Conectamos os inputs ao estado
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton} disabled={status === 'Enviando...'}>
          {/* 9. Feedback dinâmico no botão */}
          {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        
        {/* 10. Mensagem de status para o usuário */}
        {status && status !== 'Enviando...' && (
          <p className={styles.statusMessage}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;