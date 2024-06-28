/**
 * 
 * @param {Date|null} date 
 * @returns {string|null}
 */
export function dateToString(date) {

    if(date == null) {
        return null;
    } else {
        const dateFormatter = new Intl.DateTimeFormat('es-AR', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        }).format(date);
    
        return dateFormatter.replace(',', '');
    }
   
}

export function formatFirebaseDate (firestoreDate) {
    const date = new Date(firestoreDate.seconds * 1000 + firestoreDate.nanoseconds / 1000000);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
    