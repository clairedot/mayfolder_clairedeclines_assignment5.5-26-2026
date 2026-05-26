"use client";

import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";
export default function A5Page() {
  const reason1Toast = () => {
    addToast({
      title: "First Reason",
      description:
        "Loki isn't a 'good' character, but he does redeem himself. In the end, he places himself in isolation and sacrifices himself in order to save the universe.",
      color: "primary",
    });
  };
  const reason2Toast = () => {
    addToast({
      title: "Second Reason",
      description:
        "In the Marvel movies, Loki takes on the responsibility of managing and fixing the broken timelines, in order to save his friends.",
      color: "success",
    });
  };
  const reason3Toast = () => {
    addToast({
      title: "Third Reason",
      description:
        "Loki is offered the throne/a position of royalty multiple times. But he never accepts that position, for he recognizes accepting it will destroy free will.",
      color: "warning",
    });
  };

  return (
    <>
      <div>
        <h1 className={title()}>A5: Defend the Fictional Villain</h1>
        <p>
          <b>
            <i>About Loki: </i>
          </b>
          Loki is a god from from North mythology. He is the son of Laufey and a
          brother of Thor, the god of lightning. He used to be the prince of
          Asgard. Most of his actions are driven by jealousy of his brother,
          Thor. His actions cause a lot of chaos and destruction, which is why
          most consider him a villain. However, later throughout the story, Loki
          redeems himself and ultimately sacrifices himself in order to save his
          brother and the universe.
        </p>
        <Image
          alt="blue loki"
          src="https://cdn.marvel.com/content/2x/017lok_ons_mas_mob_03.jpg"
          width={200}
        />
        <Image />
        <Image
          alt="green loki"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpg1SvaieYJ1JzBfW1NWiFErK1vFvoyeDYQ&s"
          width={200}
        />
        <Image
          alt="grey loki"
          src="https://cdn.marvel.com/content/2x/017lok_ons_mas_mob_01_1.jpg"
          width={200}
        />
        <Image
          alt="tall loki"
          src="https://assets.vogue.in/photos/60f14be01cd7c4573a592a2e/1:1/w_1607,h_1607,c_limit/loki-finale-thoughts.jpeg"
          width={200}
        />
        <Image
          alt="thor and loki"
          src="https://static0.srcdn.com/wordpress/wp-content/uploads/thor-loki-avengers.jpg?w=1600&h=900&fit=crop"
          width={200}
        />

        <div className="flex flex-wrap gap-3">
          <Button
            color="secondary"
            onPress={() => {
              reason1Toast();
            }}
          >
            Reason #1
          </Button>
          <Button
            color="secondary"
            onPress={(hiiiiii) => {
              reason2Toast();
            }}
          >
            Reason #2
          </Button>
          <Button
            color="secondary"
            onPress={() => {
              reason3Toast();
            }}
          >
            Reason #3
          </Button>
        </div>
      </div>
    </>
  );
}
