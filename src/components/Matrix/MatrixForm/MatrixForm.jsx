export const MatrixForm = ({onFormSubmit}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input type="number" name="day" />
      <input type="number" name="month" />
      <input type="number" name="year" />
      <button type="submit">Ok! Let's Go</button>
    </form>
  );
};
