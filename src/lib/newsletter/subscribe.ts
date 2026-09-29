type SubscribeOptions = {
  email: string;
  name: string;
};

export async function subscribeToNewsletter({ email, name }: SubscribeOptions) {
  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
        },
        groups: [process.env.MAILERLITE_NEWSLETTER_GROUP_ID],
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to subscribe to newsletter.");
  }

  return response.json();
}
