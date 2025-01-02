export const generateStaticParams = async () => {
    return [
      { someName: 'burger' },
      { someName: 'pizza' },
      { someName: 'schnitzel' },
    ];
  };
  
  export default function MealDetailPage({ params }) {
    const { someName } = params;
  
    return (
      <main>
        <h1>Meal Details</h1>
        <p>Selected Meal: {someName}</p>
      </main>
    );
  }
  