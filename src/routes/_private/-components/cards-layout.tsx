import { Button, Card, Icons, TextStack } from "@/components";

export const CardsLayout = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card.Root className="w-full">
        <Card.Avatar alt="Provider name" src="https://robohash.org/person.png?size=200x200" />

        <div className="flex flex-col gap-5 p-5">
          <TextStack.Wrapper>
            <TextStack.Text className="text-2xl text-text-brand-on-brand-secondary">
              Dr. Pearson Person
            </TextStack.Text>

            <TextStack.Subtext className="text-lg text-text-brand-on-brand-secondary">
              Cardiology
            </TextStack.Subtext>
          </TextStack.Wrapper>
          <Card.Location
            icon={<Icons.Location />}
            locationName="Metropolitan Medical Center"
            moreCount={2}
          />

          <Button className="w-full py-2" variant="primary">
            View details
          </Button>
        </div>
      </Card.Root>

      <Card.Root className="w-full">
        <Card.Avatar alt="Provider name" src="https://robohash.org/person.png?size=200x200" />

        <div className="flex flex-col gap-5 p-5">
          <TextStack.Wrapper>
            <TextStack.Text className="text-2xl text-text-brand-on-brand-secondary">
              Dr. Pearson Person
            </TextStack.Text>

            <TextStack.Subtext className="text-lg text-text-brand-on-brand-secondary">
              Neurology
            </TextStack.Subtext>
          </TextStack.Wrapper>
          <Card.Location
            icon={<Icons.Location />}
            locationName="Metropolitan Medical Center"
            moreCount={2}
          />

          <Button className="w-full py-2" variant="primary">
            View details
          </Button>
        </div>
      </Card.Root>

      <Card.Root className="w-full">
        <Card.Avatar alt="Provider name" src="https://robohash.org/person.png?size=200x200" />

        <div className="flex flex-col gap-5 p-5">
          <TextStack.Wrapper>
            <TextStack.Text className="text-2xl text-text-brand-on-brand-secondary">
              Dr. Pearson Person
            </TextStack.Text>

            <TextStack.Subtext className="text-lg text-text-brand-on-brand-secondary">
              Pediatrics
            </TextStack.Subtext>
          </TextStack.Wrapper>
          <Card.Location
            icon={<Icons.Location />}
            locationName="Metropolitan Medical Center"
            moreCount={2}
          />

          <Button className="w-full py-2" variant="primary">
            View details
          </Button>
        </div>
      </Card.Root>

      <Card.Root className="w-full">
        <Card.Avatar alt="Provider name" src="https://robohash.org/person.png?size=200x200" />

        <div className="flex flex-col gap-5 p-5">
          <TextStack.Wrapper>
            <TextStack.Text className="text-2xl text-text-brand-on-brand-secondary">
              Dr. Pearson Person
            </TextStack.Text>

            <TextStack.Subtext className="text-lg text-text-brand-on-brand-secondary">
              Dermatology
            </TextStack.Subtext>
          </TextStack.Wrapper>
          <Card.Location
            icon={<Icons.Location />}
            locationName="Metropolitan Medical Center"
            moreCount={2}
          />

          <Button className="w-full py-2" variant="primary">
            View details
          </Button>
        </div>
      </Card.Root>
    </div>
  );
};
