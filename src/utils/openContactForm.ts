export const openContactForm = async () => {
  if (window.innerWidth <= 768) {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeWfIpeQq7uGRRHXixnLGfYXZvGWx3G1T9oMYiL2EJXctYGUA/viewform',
      '_blank'
    );
  } else {
    const Swal = (await import('sweetalert2')).default;

    Swal.fire({
      html: `
        <div style="background: white; padding: 0; margin: 0;">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWfIpeQq7uGRRHXixnLGfYXZvGWx3G1T9oMYiL2EJXctYGUA/viewform?embedded=true"
            width="640"
            height="800"
            frameborder="0"
            style="border: none;"
            allowfullscreen
          >Loading…</iframe>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: 'swal-with-iframe',
      },
      width: 750,
      background: '#ffffff',
      backdrop: 'rgba(83, 0, 188, 0.3)',
      allowOutsideClick: true,
      allowEscapeKey: true,
      focusConfirm: false, // Prevents auto-focus on a non-existent confirm button
      didOpen: () => {
        document.querySelector('.swal2-container')?.addEventListener('click', (e) => {
          // Dismiss when clicking outside iframe (not on iframe itself)
          if (e.target === document.querySelector('.swal2-container')) {
            Swal.close();
          }
        });
      },
    });
  }
};
