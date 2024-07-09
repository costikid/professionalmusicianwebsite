export async function mockSendEmail(formData) {
  console.log('Simulating sending email with data:', formData);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Email sent successfully!' });
    }, 1000);
  });
}