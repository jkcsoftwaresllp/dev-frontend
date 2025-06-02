// Where used: Before delete actions
// Why practical: Reusable confirmation dialog for any entity (user, customer, contact)








export const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>{message}</p>
      <Button onClick={onConfirm}>Yes</Button>
      <Button onClick={onCancel}>No</Button>
    </div>
  );
};
