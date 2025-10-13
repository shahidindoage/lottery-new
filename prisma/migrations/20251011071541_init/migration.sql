-- CreateTable
CREATE TABLE "LotterySubmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "dob" TIMESTAMP(3),
    "address" TEXT,
    "accepted_terms" BOOLEAN NOT NULL,
    "accepted_privacy" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LotterySubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LotterySubmission_email_key" ON "LotterySubmission"("email");
