import { Box, Link, LinkProps } from "@chakra-ui/layout";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LinkItemProps extends LinkProps {
  href: string;
  children?: ReactNode;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const LinkItem = ({ href, children, ...rest }: LinkItemProps) => {
  const router = useRouter();

  const isActive = href === router.asPath;

  return (
    <Link
      as={NextLink}
      px={2}
      href={href}
      scroll={false}
      prefetch={false}
      _hover={{ textDecor: "none" }}
      {...rest}
    >
      {children}
      {isActive && (
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Box w="100%" h="2px" bg="green.main" borderRadius="md" />
        </motion.ul>
      )}
    </Link>
  );
};

export const MainLink = ({ href, ...rest }: LinkItemProps) => {
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      prefetch={false}
      _hover={{ textDecor: "none" }}
      fontWeight="bold"
      fontSize="lg"
      {...rest}
    >
      Filipe Dias
    </Link>
  );
};
